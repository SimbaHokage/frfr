import { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useMultipleForm(steps) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    function next() {
        setCurrentStepIndex(i => {
            if(parseInt(i) >= steps.length - 1) return i
            return i + 1;
        });
    }

    function back() {
        setCurrentStepIndex(i => {
            if(i <= 0) {
                return i;
            }
            return i - 1;
        })
    }

    function goTo(index) {
        setCurrentStepIndex(index)
    }

    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1,
        goTo,
        next,
        back,
        steps
    }
}