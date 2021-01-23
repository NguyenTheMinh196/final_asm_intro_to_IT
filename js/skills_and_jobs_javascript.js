var job_descrip = ["Every type of groups always seeks a good leader and manager. In preparing, executing, overseeing, managing, and closing programs, project managers take the lead role. They are responsible for the project's whole breadth, project team, finances, and progress or failure. The central part of a project management career is that almost every business field worldwide wants project managers with different specializations, making it a successful career option. Healthcare, aviation, electronics, software development, engineering, architecture, real estate, printing, financial, marketing, manufacturing, education, insurance, government, and many other businesses require and search for successful project manager. ",
    "In the future, finding an AI developer is a must in order to take the next step. Ai developers help build operating software that can use for robots, systems for artificial intelligence, or other applications for artificial intelligence. To build systems that use artificial intelligence, they may work closely with electrical engineers or robotics engineers, and others. ",
    "Our project is positively related to electronic devices since we are making a map application. For software programs, an application developer is responsible for designing and changing the source code. The tasks include developing, testing, and programming applications for computers, cell phones, and tablets. These apps aim to support clients with computer tasks or programs. ",
    "UI developer's job is to make A technology-focused feature that aims to develop digital applications that entice the user seamless human-computer interaction. This aims to enhance the user experience by making interactions with web pages or software quick, enjoyable, easy, and efficient. Almost everywhere, there is a complicated technical framework that communicates with a customer, from the automobile industry to apps to mobile phones, you can find UI developers. "
]
var Project_manager = ["- Leadership: As a project manager, you are responsible for having the project finished successfully and leading a team to accomplish that goal. When required, this allows you to inspire and mediate", "- Scheduling: Set up a reasonable timeline and then manage the resources to stay on track so that the project can be completed on time successfully is what a project manager needs to do", "- Communication: Communication goes with leadership like hands and gloves. You can't be a productive leader if you can't explain what you need your team to do", "- Critical thinking: In evaluating and judging a problem or situation, analytical analysis is as rational as you can to form an impartial decision. When you work on a project, you face challenges, and you want your choices to be unbiased. What's better for the project should be the only thing driving the decision. ", "- Patience: Projects require time to be carefully thought about, from analysis to preparation, to run smoothly. This doesn't mean that there won't be challenges. They are always problems. If it's a proposal for improvement or a staff member behaving or clients getting great hopes, it would be infinitely more problematic if you don't have patience."]
var AI_developer = ["- Adapting to new technology: It's certainly hard to become an AI developer, but how to become an AI engineer if you don't frequently have the motivation and enthusiasm for learning? You must have highly adaptable skills and be a quick learner to be successful in your career.", "- Mathematical skill: To address the complex data, an AI developer should have a level of expertise in mathematics.", "- Fluent in several languages: They must study programming languages such as Python, C++, R, Java, etc., at some stage to become fluent in AI and ML.Python makes building complex algorithms simpler for them.C++ accelerates the entire coding process.", "- Curiosity and creativity: Programmers need to have a curious and innovative attitude to succeed in the AI domain.This helps them find new ways to solve complex issues and come up with creative ideas to break them down.It also helps them to collect abstract knowledge easily and to be clear about the possibilities of processing it well. "]
var App_developer = ["- Familiarity with platforms: Apart from mobile app development platforms for Android and iOS, it is a big plus to be familiar with API development platforms, cross-platform app development frameworks, and responsive design for mobile web applications.", "- Fluent in several languages: It is crucial to be familiar with most programming languages, especially the popular, basic ones like C, C++, HTML5, JavaScript, etc., to become an Android app developer, iOS app developer, or React Native expert.", "- Business knowledge: Above all, you need to have a clear understanding and a market - centered attitude to the business environment.This will help you develop a mobile app that gains greater exposure and earns higher revenue. "]
var UI_developer = ["- Interaction design: Interaction design aims to create an excellent experience for the user. That is why most UI disciplines need understanding and practical knowledge of the concepts of interaction design", "- Teamwork and communication skills: Team communication helps to build comprehension among team members and improve productivity.As team members gain the same knowledge of project priorities and goals, work continues efficiently and effectively.This gives us a more effective way to design that fits the work of the team.", "- Mastery in programming languages: Developers of the user interface(UI) incorporate programming, psychology, and innovative design to develop software and hardware intuitive controls.The UI developer's goal is to create an interface that acts as expected by users, enabling a smooth and productive user experience. "]
var name_of_every_job = ["Project manager", "AI developer", "Application developer", "UI developer"]
var job_name = document.getElementById("name_of_the_job")
var job = document.getElementById("job");
var skill = document.getElementById("skill");
var erase = document.getElementById("erase")

function change_job_skill_description(click) {
    erase.innerHTML = ""
    switch (parseInt(click)) {
        case 1:
            job.innerHTML = job_descrip[0]
            skill.innerHTML = Project_manager.join('<br>')
            job_name = name_of_every_job[0]
            break;
        case 2:
            job.innerHTML = job_descrip[1]
            skill.innerHTML = AI_developer.join('<br>')
            job_name = name_of_every_job[1]
            break;
        case 3:
            job.innerHTML = job_descrip[2]
            skill.innerHTML = App_developer.join('<br>')
            job_name = name_of_every_job[2]
            break;
        case 4:
            job.innerHTML = job_descrip[3]
            skill.innerHTML = UI_developer.join('<br>')
            job_name = name_of_every_job[3]
            break;
    }
}