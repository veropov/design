export class InArea {
    title: String;
    image!: String;

    constructor(title: String, image: String) {
        this.title = title;
        this.image = image;
    }

    height = {
        height: "24px"
    }

    InfoArea() {
        return (
            <div className="content_person">
                <img src={`${this.image}`} style={this.height}/>
                <p>{this.title}</p>
            </div>
        )
    }
}