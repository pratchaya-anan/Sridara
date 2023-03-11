import dayjs from "dayjs";

export const group_members = (
  tour_id: string,
  thai_name: string,
  eng_name: string,
  country: string,
  sequences: string
) => {
  return {
    fields: {
      tour_id: {
        stringValue: tour_id,
      },
      thai_name: {
        stringValue: thai_name,
      },
      eng_name: {
        stringValue: eng_name,
      },
      country: {
        stringValue: country,
      },
      sequences: {
        stringValue: sequences,
      },
    },
  };
};

export const group_tours = (
  id: string,
  trip_name: string,
  program_tour: string,
  go_date: Date,
  back_date: Date,
  day: number,
  night: number,
  vehicle_income: string,
  vehicle_outcome: string,
  guide_name: Array<string>,
  guide_tel: Array<string>,
  amount_member: number
) => {
  return {
    fields: {
      id: {
        stringValue: id,
      },
      trip_name: {
        stringValue: trip_name,
      },
      program_tour: {
        stringValue: program_tour,
      },
      go_date: {
        stringValue: dayjs(go_date).format("DD/MM/YYYY"),
      },
      back_date: {
        stringValue: dayjs(back_date).format("DD/MM/YYYY"),
      },
      day: {
        stringValue: String(day),
      },
      night: {
        stringValue: String(night),
      },
      vehicle_income: {
        stringValue: vehicle_income,
      },
      vehicle_outcome: {
        stringValue: vehicle_outcome,
      },
      guide_name: {
        stringValue: guide_name.join(","),
      },
      guide_tel: {
        stringValue: guide_tel.join(","),
      },
      amount_member: {
        stringValue: String(amount_member),
      },
    },
  };
};
