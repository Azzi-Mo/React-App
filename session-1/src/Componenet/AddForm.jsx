function AddForm() {
  return (
    <>
      <form onSubmit={(e)=>{ e.preventDefault() }}>
        <div className="form-group">
          <label for="exampleInputEmail1">Product title </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Product title"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1"> id</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="text"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default AddForm