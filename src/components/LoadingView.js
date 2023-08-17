import React from 'react'

export default function LoadingView() {
  return (
    <div class="card" aria-hidden="true">
        <img src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" class="card-img-top" alt="placholder images" />
        <div class="card-body">
            <h5 class="card-title placeholder-glow">
            <span class="placeholder col-6"></span>
            </h5>
            <p class="card-text placeholder-glow">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
            </p>
            <a class="btn btn-primary disabled placeholder col-6"></a>
        </div>
        </div>
  )
}
