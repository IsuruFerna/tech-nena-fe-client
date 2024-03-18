import { Container } from "react-bootstrap";
import AddCoverPhoto from "../component/post/AddCoverPhoto";

const CreateContentPage = () => {
   return (
      <Container>
         <AddCoverPhoto />
         <div className="col-span-full">
            <label
               htmlFor="about"
               className="block text-sm font-medium leading-6 text-gray-900"
            >
               Description
            </label>
            <div className="mt-2">
               <textarea
                  id="about"
                  name="about"
                  rows="10"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
               ></textarea>
            </div>
         </div>

         <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
               type="button"
               className="text-sm font-semibold leading-6 text-gray-900"
            >
               Cancel
            </button>
            <button
               type="submit"
               className="rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
            >
               Post
            </button>
         </div>
      </Container>
   );
};

export default CreateContentPage;
