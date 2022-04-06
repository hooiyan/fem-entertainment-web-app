// 1. When the user clicks on this button
// 2. It will change the page number to 2 and so on... (so most probably I'll have to create a variable to keep track of this number until it reaches the last page of the results)
// 3. Next, this number will get updated/appended to the end of the endpoint that we're requesting for
// 4. Then the next 20 results will be fetched and displayed on the page

export default function LoadMore({ onClick }) {
  return (
    <div className="my-20 flex items-center justify-center">
      <button
        className="rounded-lg border-2 border-app-pure-white py-2 px-4 text-center font-medium hover:bg-app-pure-white hover:text-app-dark-blue"
        onClick={onClick}>
        Load more
      </button>
    </div>
  )
}
