defmodule Rocketpay.Accounts.Operation do
  alias Ecto.Multi
  alias Rocketpay.{ Account }

  def call( %{ "id" => id, "value" => value }, operation) do
    Multi.new()
    |> Multi.run(:account, fn repo, _changes -> get_account(repo, id) end)
    |> Multi.run(:update_balance, fn repo, %{account: account} -> update_balance(repo, account, value, operation) end)
  end

  defp get_account(repo, id) do
    case repo.get(Account, id) do
      nil -> {:error, "Account not found, try again!"}
      account -> {:ok, account}
    end
  end

  defp update_balance(repo, account, value, operation) do
    account
    |> operations(value, operation)
    |> udpate_account(repo, account)
  end

  defp operations(%Account{balance: balance}, value, operations) do
    value
    |> Decimal.cast()
    |> handle_cast(balance, operations)
  end

  defp handle_cast({:ok, value}, balance, :deposit), do: Decimal.add(balance, value)

  defp handle_cast({:ok, value}, balance, :withdraw), do: Decimal.sub(balance, value)

  defp handle_cast(:error, _balance, _operation), do: {:error, "Invalid deposit value"}

  defp udpate_account(value, repo, account) do
    params = %{balance: value}

    account
    |> Account.changeset(params)
    |> repo.update()
  end
end
