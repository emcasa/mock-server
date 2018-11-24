import { getDistrict, DISTRICTS } from "../mocks/District";

export default {
  districts: () => DISTRICTS.map(name => getDistrict(() => name)),
  interestTypes: () => [
    { id: "1", name: "Me ligue dentro de 5 minutos" },
    { id: "2", name: "Me ligue em um horário específico" },
    { id: "3", name: "Agendamento por e-mail" },
    { id: "4", name: "Agendamento por Whatsapp" }
  ]
};
