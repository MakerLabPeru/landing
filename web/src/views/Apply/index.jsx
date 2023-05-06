import {FormCircles} from "./FormCircles";
import {FormQuestions} from "./FormQuestions";

const Apply = () => (
    <div className="container mt-10 md:mt-16 w-10/12 md:w-6/12">
      <div className="grid grid-cols-1 items-center gap-y-10">
        <div>
          <h1 className="text-4xl font-bold">Postular a MakerLab</h1>
        </div>
        <FormCircles/>
        <FormQuestions/>
      </div>
    </div>
  )

export default Apply;
