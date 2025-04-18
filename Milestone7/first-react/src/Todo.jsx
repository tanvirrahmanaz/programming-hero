export default function ToDo({tasks,isDone}){
    if(isDone === true){
       return(
        <li>Done: {tasks}</li>
       )
    }
    else{
        return(
            <li>Pending: {tasks}</li>
           )
    }
}  