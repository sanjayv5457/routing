export const metadata = {
  title: "Files",
};
export default async function file({ params }) {
    const paramsObj = await params;
    const { filepath } = paramsObj; 
    return (
        <div>
            <h1>File Path: {filepath?.join("/")}</h1>
        </div> 
    )

}