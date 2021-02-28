defmodule RocketpayWeb.AccountsView do
  alias Rocketpay.{Account}
  alias Rocketpay.Accounts.Transactions.Response, as: TransactioResponse

  def render("update.json", %{account: %Account{id: id, balance: balance}}) do
    %{
      account: %{
        id: id,
        balance: balance
      },
      message: "Balance changed successfully"
    }
  end

  def render("transaction.json", %{transaction:
  %TransactioResponse{to_account: to_account, from_account: from_account}}) do
    %{
      message: "Transaction done successfully",
      transaction: %{
        from_account: %{
          id: from_account.id,
          balance: from_account.balance
        },
        to_account: %{
          id: to_account.id,
          balance: to_account.balance
        }
      }
    }
  end
end
