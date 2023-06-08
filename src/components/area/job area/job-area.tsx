export class ClassArea {
    title: String;
    subTitle: String;
    dateStart: String;
    dateEnd: String;
    image!: String;

    constructor(title: String, subTitle: String, dateStart: String, dateEnd: String, image: String) {
        this.title = title;
        this.subTitle = subTitle;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.image = image;
    }

    height = {
        height: "30px"
    }

    JobArea() {
        return (
            <div className="container_person-job">
                <div className="job">
                    <div className="job_img">
                        <img src={`${this.image}`} style={this.height} />
                        <p className="job_type">{this.title}</p>
                    </div>
                    <div className="job_p">
                        <p className="jop_p_bold">{this.subTitle}</p>
                        <p className="jop_p_light">{this.dateStart} — <br />{this.dateEnd}</p>
                    </div>
                </div>
            </div>
        )
    }
}
