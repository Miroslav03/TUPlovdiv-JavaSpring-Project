import Question from "./components/Question";

export default function Faq() {
  return (
    <div className="h-full bg-main-background-color py-16 px-[25rem] justify-center flex gap-10 items-center sm:px-[1rem] sm:flex-col sm:text-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-main-text-color font-bold text-4xl">Frequently asked questions</h1>
        <p className="font-semibold text-main-text-color">
          Can't find the answer you're looking for? Reach out to our customer
          support team.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Question queston={'What is SkillFind'} answer={`'SkillFind is a freelance job marketplace that connects skilled freelancers with clients looking for high-quality work. Whether you're a freelancer seeking new opportunities or a client searching for talent.'`}/>
        <Question queston={`How do I create an account?`} answer={`To create an account, click on the "Register" button at the top of the homepage. Fill in your details, choose whether you are a freelancer or a client, and follow the instructions to complete the registration process.`}/>
        <Question queston={`How do I post a job?`} answer={`If you are a freealncer, you can post a job by logging into your account and clicking on the "Post a Job" button. Fill in the job details, including the description, requirements, and budget, and publish your job listing.`}/>
        <Question queston={'Can I edit or delete my job postings?'} answer={'Yes, freealncer can edit or delete their job postings by logging into their account, navigating to their job listings, and selecting the appropriate option for the job they wish to modify.'}/>
      </div>
    </div>
  );
}
