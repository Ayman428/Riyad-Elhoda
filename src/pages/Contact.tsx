import Hero from "../components/once/Hero";
import FAQs from "../components/reuse/FAQs";

const Contact = () => {
    return (
        <div>
            <Hero
                backgroundImage="/assets/HeroBg5.png"
                title="شركة مدارس رياض الهدى"
                header="Riyadh AL-Huda Schools"
                description="شركة مدارس رياض الهدى هي مؤسسة تعليمية رائدة، تسعى إلى تقديم تعليم متميز يرتكز على أسس علمية حديثة ومتطورة. نؤمن بأهمية بناء جيل واعٍ ومبدع، يمتلك المهارات والمعارف التي تؤهله لمواكبة متطلبات العصر،"
                isHomePage={false}
            />
            <FAQs />
        </div>
    )
}

export default Contact;