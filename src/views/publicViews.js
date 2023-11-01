const Author = "Jordaly Jose Suriel Vargas"

export function home(req, res){
    return res.render("home")
}

export function about(req,res){
    let context = {
        title: "About",
        author: Author
    }
    return res.render("about", context) 
}

export function contact(req,res){
    let context = {
        author: Author,
        github: "https://github.com/jordaly"
    }
    return res.render("contact", context)
}
