import { useEffect } from "react";
const ModalVideo = (props) => {
    let name = ''
    useEffect(() => {
        name = document.getElementById('test');
        var myModalEl = document.getElementById('video')
        myModalEl.addEventListener('hidden.bs.modal', function (event) {
          name.src = name.src;
        })
    }, []);
    return(
        <div className="modal fade vid" id="video" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered container">
                <div className="modal-content">
                    <div className="modal-body text-end p-0">
                    <a href className="text-decoration-none text-white bg-transparent" data-bs-dismiss="modal">
                        <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                        </svg>
                    </a>
                    <div className="ratio ratio-16x9 mt-2">
                        <iframe id="test" src={props.url} className="mylink" title="YouTube video" allowFullScreen />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ModalVideo