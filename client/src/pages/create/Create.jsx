import './create.css';

const Create = () => {
    return (
        <div className="create">
        <img className="createImg" src="https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="postpic"/>
            <form className="createForm">
                <div className="createFormGroup">
                    <label htmlFor="fileInput">
                        <i class="fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" placeholder="Title" className="createInput" autoFocus={true} />
                </div>
                <div className="createFormGroup">
                    <textarea placeholder="Tell your story..." type="text" className="createInput createText"></textarea>
                </div>
                <button className="createSubmit">Publish</button>
            </form>
        </div>
    );
}

export default Create;
