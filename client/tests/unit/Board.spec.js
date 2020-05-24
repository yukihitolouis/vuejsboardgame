import { shallowMount } from '@vue/test-utils'
import Board from '@/components/Board.vue'

describe('Board.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(Board)
    expect(wrapper.exists())
  })
})
