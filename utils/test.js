if_eq: (a, b) => {
    if (a == b) {
      return ` <div class="card-footer text-muted">
      <button type="button" class="btn btn-danger float-right" style="width: 150px;" data-id="{{post.id}}">DELETE</button>
      </div>`
    }
  }
