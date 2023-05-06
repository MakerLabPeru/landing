import {CircleIcon} from "~/components";

export const FormCircles = () => (
  <div className="flex items-center justify-between">
    <CircleIcon icon="list" message="En esta etapa vas a llenar un formulario con algunas preguntas que nos ayudarán a conocerte un poco más" />
    <div className="w-1/3 h-0.5 bg-gray-300" />
    <CircleIcon icon="interview" message="En esta etapa vas a ser entrevistado por uno de nuestros coaches" />
    <div className="w-1/3 h-0.5 bg-gray-300" />
    <CircleIcon icon="check" message="Finalmente revisaremos tus resultados" />
  </div>
)
