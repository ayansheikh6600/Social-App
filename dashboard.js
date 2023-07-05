var CardDiv = document.getElementById("Card-div")


window.addEventListener("load",function(){
    if(CardDiv){
      var getPost = JSON.parse(localStorage.getItem('posts')) || []
      console.log('getposts',getPost)
      for (var value of getPost) {
      CardDiv.innerHTML += `<div class="card mt-3 ms-2" style="width: 18rem;">
      <div class="card-body">
          <h5 class="card-title">${value.title}</h5>
          <p class="card-text">${value.desc}</p>
          <button class="btn edit-btn" onclick="editPost(${value.id} , this)">Edit</button>
          <button class="btn btn-danger" onclick="delPost(${value.id} , this)">Delete</button>
      </div>
  </div>`
        
      }
    }
  })







function addPost() {
    console.log("addPost")
    var title = document.getElementById("input")
    var desc = document.getElementById("desc")


    if (!title.value || !desc.value) {
        alert("Please enter values")
        return
    }

    var id;
    var getPosts = JSON.parse(localStorage.getItem("posts")) || []
    console.log("getPosts", getPosts)

    if (getPosts.length > 0) {
        id = getPosts[0].id + 1
    } else {
        id = 1
    }

    var card = `<div class="card mt-3 ms-2" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${title.value}</h5>
        <p class="card-text">${desc.value}</p>
        <button class="btn edit-btn" onclick="editPost(${id} , this)">Edit</button>
        <button class="btn btn-danger" onclick="delPost(${id} , this)">Delete</button>
    </div>
</div>`

    CardDiv.innerHTML = card + CardDiv.innerHTML

    var postObj = {
        id: id,
        title: title.value,
        desc: desc.value
    }

    getPosts.unshift(postObj)
    localStorage.setItem("posts", JSON.stringify(getPosts))

    title.value = ""
    desc.value = ""


}

function editPost(id, el) {
    var indexNum;
    var getPosts = JSON.parse(localStorage.getItem("posts"))
    var post = getPosts.find(function (value, index) {
        if (value.id === id) {
            indexNum = index
            return true
        }
    })
    var editTitle = prompt("edit title", post.title)
    var editDesc = prompt("edit desc", post.desc)
    const editObj = {
        id: post.id,
        title: editTitle,
        desc: editDesc
    }
    getPosts.splice(indexNum, 1, editObj)
    localStorage.setItem("posts", JSON.stringify(getPosts))

    var h5Title = el.parentNode.firstElementChild
    var pDesc = el.parentNode.firstElementChild.nextElementSibling
    h5Title.innerHTML = editTitle
    pDesc.innerHTML = editDesc
}

function delPost(id,el){
    var getposts = JSON.parse(localStorage.getItem('posts'))
    var indexNum = getposts.findIndex(function (value){
      if(value.id==id) return true
    })
    getposts.splice(indexNum,1)
    localStorage.setItem('posts', JSON.stringify(getposts))
    el.parentNode.parentNode.remove()
  }