
import ProjectEditor from "@/components/admin/ProjectEditor";

export default function EditProjectPage({ params }: { params: { id: string } }) {
    return <ProjectEditor projectId={params.id} />;
}
