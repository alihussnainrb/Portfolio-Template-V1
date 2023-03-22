import { Project } from "@/data/projectsList";
import { cmsClient } from "@/libs/cms-client";






export async function getFeaturedProjects(): Promise<Project[]> {
    const { items } = await cmsClient.getEntries({
        content_type: "project",
        'fields.featured': true,
    })

    return items.map((item) => {
        let fields = (item.fields as any)
        return {
            id: item.sys.id,
            name: fields.name,
            description: fields.description,
            featured: fields.featured,
            github: fields.github ?? "",
            preview: fields.preview ?? "",
            tags: fields.tags,
            image: fields.image.fields.file.url,
        }
    })
}


export async function getProjects(limit: number = 9): Promise<Project[]> {
    const { items } = await cmsClient.getEntries({
        content_type: "project"
    })

    return items.map((item) => {
        let fields = (item.fields as any)
        console.log(fields.image.fields.file)
        return {
            id: item.sys.id,
            name: fields.name,
            description: fields.description,
            featured: fields.featured,
            github: fields.github ?? "",
            preview: fields.preview ?? "",
            tags: fields.tags,
            image: fields.image.fields.file.url
        }
    })
}


