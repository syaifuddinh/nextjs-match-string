"use client"

import "@/assets/css/index.scss";
import useMainDataController from "@/hooks/useMainDataController"

const Home = () => {
    const { formData, setFormData, result, onSubmit } = useMainDataController();
  
  return (
    <div className="screen">
        <div className="screen-1">
            { result && (
                <>
                    Result : { result }
                </>
            ) }
            
        </div>
        <div className="screen-2">
            <div>
                <div className="label">
                    Sentence 1
                </div>
                <input
                    type="text"
                    value={formData.sentence1}
                    onChange={e => setFormData({...formData, sentence1: e.target.value})}
                />
            </div>

            <div>
                <div className="label">
                    Sentence 2
                </div>
                <input
                    type="text"
                    value={formData.sentence2}
                    onChange={e => setFormData({...formData, sentence2: e.target.value})}
                />
            </div>

            <button
                type="button"
                onClick={onSubmit}
            >
                Submit
            </button>
        </div>
    </div>
  )
}

export default Home;