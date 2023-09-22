import { createBucketClient } from "@cosmicjs/sdk";

const cosmicClient = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
});

export type Project = {
  id: string;
  slug: string;
  title: string;
  image: string;
  github_url?: string | null;
  preview_url?: string | null;
  description: string;
  tags: string[];
};

const cmsApi = {
  getProjects: async (limit = 10) => {
    try {
      const projects: Project[] = (
        await cosmicClient.objects
          .find({
            type: "projects",
            // status: "published",
          })
          //   .props(["tags", "image"])
          .limit(limit)
      )?.objects?.map((object: any) => {
        return {
          title: object.title,
          slug: object.slug,
          image: object?.metadata?.image?.url ?? "",
          github_url: object.metadata?.github_url,
          preview_url: object.metadata?.preview_url,
          description: object.metadata?.description,
          tags:
            object.metadata?.tags?.flatMap(
              (tagObj: { tag: string }) => tagObj.tag
            ) ?? [],
        };
      });
      return projects;
    } catch (error) {
      return [];
    }
  },
};

export default cmsApi;
