import { expect, TestUtils, renderComponent } from './test-helpers'
import Base from '../../src/client/base'

describe('Base Component', () => {
  let component

  beforeEach(() => {
    component = renderComponent(Base)
  })

  it('should exist', () => {
    const elements = TestUtils.findRenderedDOMComponentWithClass(
      component,
      'base-component'
    )

    expect(elements).to.exist
  })
})
