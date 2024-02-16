import '../../css/loader.css'

const Loader = () => {
  return (
    <div>
      <div class="flex items-center justify-center fixed inset-0">
        <div class="bg-white p-4 shadow-md">
          <span class="loader"></span>
        </div>
      </div>
    </div>
  )
}

export default Loader
