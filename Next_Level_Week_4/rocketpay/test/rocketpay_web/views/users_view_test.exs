defmodule RocketpayWeb.UsersViewTest do
  use RocketpayWeb.ConnCase, async: true

  import Phoenix.View

  alias Rocketpay.{User, Account}
  alias RocketpayWeb.UsersView

  test "render create.json" do
    params = %{
      name: "alison",
      password: "123123",
      email: "alison@gmail.com",
      nickname: "amaziero",
      age: 25
    }

    {:ok,
    %User{id: user_id, account: %Account{id: account_id}} = user
    } = Rocketpay.create_user(params)

    response = render(UsersView, "create.json", user: user)

    expected_response = %{
      message: "User created",
      user: %{
        account: %{
          balance: Decimal.new("0.00"),
          id: account_id
        },
        id: user_id,
        name: "alison",
        nickname: "amaziero"
      }
    }

    assert expected_response == response

  end
end
