import React from "react";

interface HeadModel {
  title: string;
  description: string;
}

const Head = (props: HeadModel) => {
  React.useEffect(() => {
    document.title = props.title;
    const getMetaDescription = document.querySelector(
      'meta[name="description"]'
    );
    if (getMetaDescription) {
      getMetaDescription.setAttribute("description", props.description);
    }
  }, [props]);

  return <></>;
};

export default Head;
