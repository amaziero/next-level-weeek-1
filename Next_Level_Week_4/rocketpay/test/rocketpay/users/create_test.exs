defmodule Rocketpay.Users.CreateTest do
  use Rocketpay.DataCase, async: true

  alias Rocketpay.User
  alias Rocketpay.Repo
  alias Rocketpay.Users.Create

  describe "call/1" do
    test "When all params are valid, return an user" do
      params = %{
        name: "alison",
        password: "123123",
        email: "alison@gmail.com",
        nickname: "amaziero",
        age: 25
      }

      {:ok, %User{id: user_id}} = Create.call(params)
      user = Repo.get(User, user_id)

      assert %User{
        name: "alison",
        age: 25,
        id: ^user_id} = user
    end

    test "When there are invalid params, return an error" do
      params = %{
        name: "alison",
        password: "123123",
        email: "alison@gmail.com",
        nickname: "amaziero",
        age: 15
      }

      {:error, changeset} = Create.call(params)

      expected_response = %{age: ["must be greater than or equal to 18"]}

      assert errors_on(changeset) == expected_response
    end
  end
end
