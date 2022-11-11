import { shallow } from "enzyme";
import { InputTag } from "./inputTag";

test("renders learn react link", () => {
  const input = shallow(
    <InputTag
      {...{ handleOnChange: () => {}, inputRef: null, inputValue: "" }}
    />
  );
  expect(input.props().value).toEqual("");
});
