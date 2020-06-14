export default (id = "root") => {
    const root = document.createElement("div");
    root.setAttribute("id", id)
    return root;
};