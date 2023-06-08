import { NavLink } from "react-router-dom";

export class Button {
    title?: String;
    nameTitle?: string;
    nameBack?: string;

    constructor(title: String, nameTitle: string, nameBack: string) {
        this.title = title;
        this.nameTitle = nameTitle;
        this.nameBack = nameBack;
    }

    a = {
        textDecoration: 'none'
    }

    Button() {
        return (
            <div className={this.nameBack} >
                <p className={this.nameTitle}>{this.title}</p>
            </div>
        )
    }
}