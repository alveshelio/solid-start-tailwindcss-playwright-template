import { normalizeProps, useMachine } from '@zag-js/solid';
import * as toggle from '@zag-js/toggle';
import { createMemo } from 'solid-js';

export const Toggle = () => {
  const [state, send] = useMachine(
    toggle.machine({
      id: 'toggle',
    })
  );
  const api = createMemo(() => toggle.connect(state, send, normalizeProps));
  return (
    <button
      class="w-[200px] rounded-full bg-gray-100 border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[2rem] py-2 text-xl"
      {...api().buttonProps}
    >
      {api().isPressed ? 'On' : 'Off'}
    </button>
  );
};
