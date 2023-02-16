import { Card, TextInput } from "flowbite-react";
import { useState } from "react";

const Post = ({ user, addField }) => {
  const [field, setField] = useState(``);

  const fieldOnChangehandler = (e) => {
    setField(e.target.value);
  };

  const userName = user.userName;
  const handleSubmit = (e) => {
    e.preventDefault();

    const post = {
      field,
      userName,
    };
    addField(post);
  };

  return (
    <>
      <Card className="center">
        <form onSubmit={handleSubmit}>
          <TextInput
            id="large"
            type="text"
            value={field}
            onChange={fieldOnChangehandler}
            sizing="lg"
            placeholder={`What's up, ${user.userName}?`}
          />
          <button
            type="submit"
            className="w-sm float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Post
          </button>
        </form>
      </Card>
    </>
  );
};

export default Post;
