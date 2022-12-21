@extends('layouts.app')



@section('content')
@foreach ($groupedOrders as $groupedOrder)
<div>
    <h1>ORDINI:</h1>
    <h2>Indirizzo Ordine: {{ $groupedOrder['address_client'] }}</h2>
    <h3>Email Cliente: {{$groupedOrder['email_client']}}</h3>
    <h3>Prezzo Totale: {{$groupedOrder['total_price']}} Euro</h3>
    <div>Dettaglio ordine:
        <div>
            @foreach ($groupedOrder['dishes'] as $dish)
                <div>{{ $dish['quantity'] }} {{$dish['name']}}</div>
            @endforeach
        </div>
    </div>

</div>
@endforeach
@endsection
