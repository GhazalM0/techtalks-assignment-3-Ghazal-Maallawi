let tasks = [
    {
        id: 1,
        title: "Review Route Handlers",
        completed: false
    }
];

export async function GET(
    request: Request,
    {params}: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const task = tasks.find((t) => t.id === Number(id));
    if (!task) {
        return Response.json({ message: "Task was not found" }, { status: 404 });
    }
    return Response.json(task);
}

export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const body = await request.json();
    const task = tasks.find((t) => t.id === Number(id));
    if (!task) {
        return  Response.json({ message: "Route not found" }, { status: 404 });
    }
    task.title = body.title;
    return Response.json(task);
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const task = tasks.find((t) => t.id === Number(id));
    if (!task) {
        return Response.json({ message: "Task not found" }, { status: 404 });
    }
    tasks = tasks.filter((t) => t.id !== Number(id));
    return Response.json({ message: "Task deleted" });
}