import Header from "../../../lib/header"
import { FigmaContainerArea } from "../../area/figma-area";
import { TextAreaVert3, TextAreaVert2 } from "../../area/text-area-vert";
import { StateBanner } from "../../banner/banner"
import ujmImg from '../../banner/img banner/UJM-Back.jpg';
import smartHome from '../../banner/img banner/UJM-Home.png';
import { BottomNavigation } from "../../bottom navigation/bottom-navigation";
import reg1 from '../../video/reg1.mp4';
import reg2 from '../../video/reg2.mp4';


export const UJMReg = () => {


    const banner = new StateBanner(
        'Smart drive',
        'Приложение, позволяющее cократить ',
        'расходы на оформление ОСАГО',
        ujmImg,
        smartHome,
        'smartImg'
    )

    return (
        <div className="container">
        <Header />
            <div className="main">
            <div className="container_main-1">
                {banner.StateDots()}
                <div className="container_text_main">
                    <TextAreaVert2 
                            name={'Заполнение формы'} 
                            title={'Метод'} 
                            subTitle={'Карта пользователя Smart drive была унаследована из FigJam и представляет собой анализ основного пути пользователя на всех точках взаимодействия. Я сделал большой акцент в сторону эмоций при взаимодействии с интерфейсом, так как функционал приложения повторяет старую версию без обновленного UI.'} 
                            title2={'Опыт'} 
                            subTitle2={'В моем тестировании участвовало 2 человека из целевой аудитории, поэтому я объединил их в одну карту. Так как в центре UJM находится опыт пользователя, все тесты я проводил на прототипах, созданных на фреймворке flutter. '} 
                            video={reg1}
                            figarea={false}
                    />
                    <TextAreaVert2 
                            name={'Быстрая регистрация'} 
                            title={'Метод'} 
                            subTitle={'Карта пользователя Smart drive была унаследована из FigJam и представляет собой анализ основного пути пользователя на всех точках взаимодействия. Я сделал большой акцент в сторону эмоций при взаимодействии с интерфейсом, так как функционал приложения повторяет старую версию без обновленного UI.'} 
                            title2={'Опыт'} 
                            subTitle2={'В моем тестировании участвовало 2 человека из целевой аудитории, поэтому я объединил их в одну карту. Так как в центре UJM находится опыт пользователя, все тесты я проводил на прототипах, созданных на фреймворке flutter. '} 
                            video={reg2}
                            figarea={false}
                    />
                </div>
                <BottomNavigation 
                    subTitleP={'Вернуться в '} 
                    subTitleB={'User Journey Map'} 
                    subTitleP2={'Перейти к '} 
                    subTitleB2={'Прогрессу вождения'}
                />
                </div>
            </div>
        </div>
    )
}