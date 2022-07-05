const AdminModal = () => {
    return (
        <>
            <div className="modal-body">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <textarea
                        className="form-control"
                        required
                        defaultValue={''}
                    />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input type="text" className="form-control" required />
                </div>
            </div>
            <div className="modal-footer">
                <input
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    defaultValue="Cancel"
                />
                <input
                    type="submit"
                    className="btn btn-info"
                    defaultValue="Save"
                />
            </div>
        </>
    )
}
export default AdminModal;