
export default function Section(){


    return (<div className="section">

        <h1 className="title">{/* display the title from the database */}</h1>

        <div className="content">

            {/* shown or hidden depending on if theres information. If there's no information, only the excersise will show  */}
            <p className="information">{/* display the information_text from the database */}</p>

            <div className="materials"> 
                <h3>Materials to Practice:</h3>
                <p>{/* display the materials listed in the database  */}</p>
            </div>

            

        </div>
        
        {/* button directs to the next section within the lesson, or to the next lesson if the user is on the last section */}
        {/* should start disabled until the user completes an exercise */}
        <button disabled={true}>Next</button>

    </div>)
}