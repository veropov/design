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
                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.1484V2.85165C0 0.713874 2.32997 -0.608488 4.16535 0.487638L12.7858 5.63599C14.5747 6.70436 14.5747 9.29564 12.7859 10.364L4.16535 15.5124C2.32998 16.6085 0 15.2861 0 13.1484Z" fill="#161616"/>
                </svg>
                <p className={this.nameTitle}>{this.title}</p>
            </div>
        )
    }
}