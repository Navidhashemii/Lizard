import Button from "./Button";
import CardPicture from "./CardPicture";
import Context from "./Context";
import Title from "./Title";
import './Card.css'

const Card = () => {
    return (
        <div className="card">
          <CardPicture />
          <div className="card2">
            <Title title="Lizard"/>
            <Context context="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati nesciunt beatae nobis fuga similique mollitia,
                delectus quo aliquid ut, ullam ducimus veniam numquam,
                accusantium ab dignissimos pariatur nostrum officiis perspiciatis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci neque incidunt rerum
                sapiente quis iusto dolores iure possimus cumque! Porro exercitationem distinctio similique
                labore vel voluptatum molestias dignissimos sunt repellat."/>
                <div className="btn">
                    <Button button="SHARE"/>
                    <Button button="LEARN MORE"/>
                </div>
        
          </div>
        </div>
      )
    }

export default Card;