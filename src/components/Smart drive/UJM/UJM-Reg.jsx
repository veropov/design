import Header from "../../../lib/header"
import { EmotionArea } from "../../area/emotion-area";
import { FigmaContainerArea } from "../../area/figma-area";
import { TextAreaVert3, TextAreaVert2 } from "../../area/text-area-vert";
import { StateBanner } from "../../banner/banner"
import ujmImg from '../../banner/img banner/UJM-Back.jpg';
import smartHome from '../../banner/img banner/UJM-Home.png';
import { BottomNavigation } from "../../bottom navigation/bottom-navigation";
import reg1 from '../../video/reg1.mp4';
import reg2 from '../../video/reg2.mp4';
import { UJMHome } from "./UJM-Home";
import { UJMProgress } from "./UJM-Progress";

export const UJMReg = () => {


    const banner = new StateBanner(
        'Smart drive',
        'Карта регистрации',
        '',
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
                    <EmotionArea 
                        name={'Заполнение формы'} 
                        title={'Эмоции'} 
                        title2={'Улучшения'} 
                        happeTitle={'Интуитивно понимает, что делать. Визуально доволен интерфейсом.'} 
                        conusedTitle={'Недоволен скудным выбором быстрой регистрации. Хочет быструю регистрации через телефон. Не понимает состояние инпутов. Растерян из-за одинаковых иконок имени и фамилии.'} 
                        angryTitle={'Раздражается, когда алерт (ошибка в заполнении формы) выскакивает после нажатия кнопки “вперед”. '} 
                        pencilTitle={'Добавлены состояния инпутов. Правила заполнения данных появляются, как только пользователь допускает ошибку. Изменена иконка фамилии.'} 
                        codeTitle={"Регистрация через телефон не реализована. Прототип отсутствует."} 
                        video={reg1}                        
                    />
                    <EmotionArea 
                        name={'Быстрая регистрация'} 
                        title={'Эмоции'} 
                        title2={'Улучшения'} 
                        happeTitle={'Удобная кнопка согласия на обработку данных.'} 
                        conusedTitle={'Не понимает, зачем нужен договор с ARX и почему нельзя пользоваться приложением без него.'} 
                        angryTitle={'Раздражен тем, что автозаполнение договора невозможно без аккаунта ARX. Приходится регистрироваться сначала в ARX, затем в Smart drive. Кнопка заходит на форму регистрации, когда появляется клавиатура.'} 
                        pencilTitle={'Добавлена регистрация в ARX страховании через приложение. Исправлена верстка при появлении виртуальной клавиатуры.'} 
                        codeTitle={"Возможность регистрации добавлена только в фигме. Прототип отсутствует, так как нет API ARX страхования."} 
                        video={reg2}                        
                    />
                </div>
                <BottomNavigation 
                    subTitleP={'Вернуться в '} 
                    subTitleB={'User Journey Map'} 
                    subTitleP2={'Перейти к '} 
                    subTitleB2={'Прогрессу вождения'}
                    enter={'/smart-drive/ujm'}
                    back={'/smart-drive/ujm/progress'}
                />
                </div>
            </div>
        </div>
    )
}