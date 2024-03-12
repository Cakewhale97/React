function handleFormSubmit(e) {
    e.preventDefault();
    console.log("submitted");
}
export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    )
}