interface Body {
  type: string;
  user_id: string;
  data: any;
}

export const postEvent = async (body: Body) => {
  try {
    const res = await fetch("https://testapi.numan.com/v1/events", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};
