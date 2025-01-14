export function resetPage() {
    const parent = document.getElementById("content"); 

    while (parent.firstChild) {
        parent.firstChild.remove();
    }
}