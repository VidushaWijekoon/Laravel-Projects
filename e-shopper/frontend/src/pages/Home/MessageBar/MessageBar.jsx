import MessageBarImage from "../../../assets/images/home-banner-img.png";

const MessageBar = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-3 mb-3">
        <img
          src={MessageBarImage}
          alt="message bar"
          className="img-fluid rounded-3"
          width="100%"
        />
      </div>
    </div>
  );
};

export default MessageBar;
