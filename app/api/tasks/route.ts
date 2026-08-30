let posts = [
    {
        id: 1,
        title: "Review Route Handlers",
        completed: false
    }
];

export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const body = await request.json();
    const post = posts.find((p) => p.id === Number(id));
    if (!post) {
        return  Response.json({ message: "Route not found" }, { status: 404 });
    }
    post.title = body.title;
    return Response.json(post);
}