import '../../css/loader.css'

const Loader = () => {
  return (
    <div>
      <div class="flex items-center justify-center fixed inset-0">
        <div class="p-4 shadow-md">
          <img src="loader.gif" alt="loader" />
        </div>
      </div>
    </div>
  )
}

export default Loader
