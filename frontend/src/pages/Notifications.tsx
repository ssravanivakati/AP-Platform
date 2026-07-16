function Notifications() {

  const notifications = [
    {
      id: 1,
      message: "Invoice INV001 requires approval",
      time: "10 minutes ago",
      status: "Unread"
    },

    {
      id: 2,
      message: "Payment completed for ABC Technologies",
      time: "1 hour ago",
      status: "Read"
    },

    {
      id: 3,
      message: "New invoice uploaded by XYZ Solutions",
      time: "Yesterday",
      status: "Unread"
    }
  ];


  return (

    <div>


      <h1 className="text-3xl font-bold">
        Notifications
      </h1>



      <div className="mt-6 space-y-4">


        {
          notifications.map((notification)=>(


            <div 
              key={notification.id}
              className="bg-white p-5 rounded shadow flex justify-between"
            >


              <div>

                <h3 className="font-semibold">
                  {notification.message}
                </h3>


                <p className="text-gray-500">
                  {notification.time}
                </p>


              </div>



              <span 
                className={
                  notification.status === "Unread"
                  ?
                  "bg-blue-100 text-blue-700 px-3 py-1 rounded"
                  :
                  "bg-gray-100 text-gray-700 px-3 py-1 rounded"
                }
              >

                {notification.status}

              </span>



            </div>


          ))
        }


      </div>


    </div>

  );

}


export default Notifications;